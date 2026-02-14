export interface VexOptions {
    /**
     * Bigger voxels = better performance.
     * @default 1
     */
    voxelSize?: number;

    /**
     * Default optimization option, keep it on.
     * @default true
     */
    useGreedyMesh?: boolean;

    /**
     * Max number of voxels which can be created, mainly a safety measure to prevent lag.
     * @default 10000
     */
    maxVoxels?: number;

    /**
     * How long before cleaning up voxels.
     */
    lifetime?: number;

    /**
     * The material of the voxels.
     */
    material?: Enum.Material;

    /**
     * The collision group of the voxels.
     * @default "Debris"
     */
    collisionGroup?: string;

    /**
     * Whether the voxels should be anchored or not.
     * @default false
     */
    anchored?: boolean;

    /**
     * Whether to weld adjacent voxels together.
     * @default true
     */
    weldAdjacent?: boolean;
}

export interface VoxelStructure {
    /**
     * Destroys the VoxelStructure and its physical Model/BasePart.
     */
    Destroy(): void;

    /**
     * Cleans up the voxels in the pool.
     */
    Cleanup(): void;

    /**
     * Applies Force to voxels in the structure from a specified position.
     * @param force The Force to apply to the voxels.
     * @param position The position at which to apply Force from.
     */
    ApplyForce(force: Vector3, position: Vector3): void;

    /**
     * Gets the current number of voxels.
     * @returns The current number of voxels.
     */
    GetVoxelCount(): number;
}

export interface VoxelPoolStats {
    readonly active: number;
    readonly pooled: number;
    readonly total: number;
}

declare const Vex: {
    /**
     * 
     * @param source The BasePart or Model to voxelize.
     * @param options Configuration settings.
     * @returns A VoxelStructure instance.
     */
    new(source: BasePart | Model, options?: Readonly<VexOptions>): VoxelStructure;

    /**
     * @returns Stats about the current state of the voxel pool.
     */
    getPoolStats(): VoxelPoolStats;

    /**
     * Clears the voxel pool.
     */
    clearPool(): void;
}

export default Vex;

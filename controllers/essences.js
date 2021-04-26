// @desc      Get all essences
// @route     GET /api/v1/essences
// @access    Public
exports.getEssences = async (req, res, next) => {
  try {
    const essences = await Essence.find();

    res.status(200).json({ success: true, data: { data: essences }}); 
  } catch (err) {
    res.status(400).json({ success: false })
  }


}
// @desc      Get a single essence
// @route     GET /api/v1/essences/:id
// @access    Public
exports.getEssence = (req, res, next) => {
  res.status(200).json({ success: true, data: { msg: `Show essence ${req.params.id}` }});
}
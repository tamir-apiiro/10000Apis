
const express = require('express')
import {handler6406} from "./handler6406";
const app = express()
app.get('/6406', handler6406)
app.listen(3000, () => {})
        
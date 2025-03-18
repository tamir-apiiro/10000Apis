
const express = require('express')
import {handler406} from "./handler406";
const app = express()
app.get('/406', handler406)
app.listen(3000, () => {})
        
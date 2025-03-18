
const express = require('express')
import {handler9406} from "./handler9406";
const app = express()
app.get('/9406', handler9406)
app.listen(3000, () => {})
        
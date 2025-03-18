
const express = require('express')
import {handler9913} from "./handler9913";
const app = express()
app.get('/9913', handler9913)
app.listen(3000, () => {})
        

const express = require('express')
import {handler9783} from "./handler9783";
const app = express()
app.get('/9783', handler9783)
app.listen(3000, () => {})
        
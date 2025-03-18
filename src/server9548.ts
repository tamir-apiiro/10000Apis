
const express = require('express')
import {handler9548} from "./handler9548";
const app = express()
app.get('/9548', handler9548)
app.listen(3000, () => {})
        
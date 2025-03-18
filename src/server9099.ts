
const express = require('express')
import {handler9099} from "./handler9099";
const app = express()
app.get('/9099', handler9099)
app.listen(3000, () => {})
        
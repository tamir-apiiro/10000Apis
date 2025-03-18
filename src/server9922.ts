
const express = require('express')
import {handler9922} from "./handler9922";
const app = express()
app.get('/9922', handler9922)
app.listen(3000, () => {})
        

const express = require('express')
import {handler9010} from "./handler9010";
const app = express()
app.get('/9010', handler9010)
app.listen(3000, () => {})
        

const express = require('express')
import {handler9269} from "./handler9269";
const app = express()
app.get('/9269', handler9269)
app.listen(3000, () => {})
        
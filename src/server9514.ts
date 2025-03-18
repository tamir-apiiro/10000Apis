
const express = require('express')
import {handler9514} from "./handler9514";
const app = express()
app.get('/9514', handler9514)
app.listen(3000, () => {})
        

const express = require('express')
import {handler9237} from "./handler9237";
const app = express()
app.get('/9237', handler9237)
app.listen(3000, () => {})
        

const express = require('express')
import {handler9930} from "./handler9930";
const app = express()
app.get('/9930', handler9930)
app.listen(3000, () => {})
        
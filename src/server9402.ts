
const express = require('express')
import {handler9402} from "./handler9402";
const app = express()
app.get('/9402', handler9402)
app.listen(3000, () => {})
        
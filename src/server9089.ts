
const express = require('express')
import {handler9089} from "./handler9089";
const app = express()
app.get('/9089', handler9089)
app.listen(3000, () => {})
        
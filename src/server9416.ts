
const express = require('express')
import {handler9416} from "./handler9416";
const app = express()
app.get('/9416', handler9416)
app.listen(3000, () => {})
        
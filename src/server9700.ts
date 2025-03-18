
const express = require('express')
import {handler9700} from "./handler9700";
const app = express()
app.get('/9700', handler9700)
app.listen(3000, () => {})
        

const express = require('express')
import {handler9880} from "./handler9880";
const app = express()
app.get('/9880', handler9880)
app.listen(3000, () => {})
        
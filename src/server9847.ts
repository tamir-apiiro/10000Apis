
const express = require('express')
import {handler9847} from "./handler9847";
const app = express()
app.get('/9847', handler9847)
app.listen(3000, () => {})
        

const express = require('express')
import {handler6165} from "./handler6165";
const app = express()
app.get('/6165', handler6165)
app.listen(3000, () => {})
        
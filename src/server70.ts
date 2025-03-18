
const express = require('express')
import {handler70} from "./handler70";
const app = express()
app.get('/70', handler70)
app.listen(3000, () => {})
        
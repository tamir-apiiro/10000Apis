
const express = require('express')
import {handler9197} from "./handler9197";
const app = express()
app.get('/9197', handler9197)
app.listen(3000, () => {})
        
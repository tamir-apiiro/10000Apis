
const express = require('express')
import {handler6197} from "./handler6197";
const app = express()
app.get('/6197', handler6197)
app.listen(3000, () => {})
        
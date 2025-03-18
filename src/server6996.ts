
const express = require('express')
import {handler6996} from "./handler6996";
const app = express()
app.get('/6996', handler6996)
app.listen(3000, () => {})
        
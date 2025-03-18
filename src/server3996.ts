
const express = require('express')
import {handler3996} from "./handler3996";
const app = express()
app.get('/3996', handler3996)
app.listen(3000, () => {})
        
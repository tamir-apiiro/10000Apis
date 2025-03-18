
const express = require('express')
import {handler9826} from "./handler9826";
const app = express()
app.get('/9826', handler9826)
app.listen(3000, () => {})
        
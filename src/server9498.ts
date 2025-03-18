
const express = require('express')
import {handler9498} from "./handler9498";
const app = express()
app.get('/9498', handler9498)
app.listen(3000, () => {})
        
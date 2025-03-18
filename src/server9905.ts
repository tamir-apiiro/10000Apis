
const express = require('express')
import {handler9905} from "./handler9905";
const app = express()
app.get('/9905', handler9905)
app.listen(3000, () => {})
        

const express = require('express')
import {handler9391} from "./handler9391";
const app = express()
app.get('/9391', handler9391)
app.listen(3000, () => {})
        
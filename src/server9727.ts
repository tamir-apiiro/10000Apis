
const express = require('express')
import {handler9727} from "./handler9727";
const app = express()
app.get('/9727', handler9727)
app.listen(3000, () => {})
        
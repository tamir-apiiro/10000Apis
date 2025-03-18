
const express = require('express')
import {handler9616} from "./handler9616";
const app = express()
app.get('/9616', handler9616)
app.listen(3000, () => {})
        
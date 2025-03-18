
const express = require('express')
import {handler9139} from "./handler9139";
const app = express()
app.get('/9139', handler9139)
app.listen(3000, () => {})
        
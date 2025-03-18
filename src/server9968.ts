
const express = require('express')
import {handler9968} from "./handler9968";
const app = express()
app.get('/9968', handler9968)
app.listen(3000, () => {})
        

const express = require('express')
import {handler7648} from "./handler7648";
const app = express()
app.get('/7648', handler7648)
app.listen(3000, () => {})
        

const express = require('express')
import {handler648} from "./handler648";
const app = express()
app.get('/648', handler648)
app.listen(3000, () => {})
        
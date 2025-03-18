
const express = require('express')
import {handler9932} from "./handler9932";
const app = express()
app.get('/9932', handler9932)
app.listen(3000, () => {})
        
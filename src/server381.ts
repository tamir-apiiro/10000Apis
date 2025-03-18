
const express = require('express')
import {handler381} from "./handler381";
const app = express()
app.get('/381', handler381)
app.listen(3000, () => {})
        
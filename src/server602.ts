
const express = require('express')
import {handler602} from "./handler602";
const app = express()
app.get('/602', handler602)
app.listen(3000, () => {})
        
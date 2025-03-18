
const express = require('express')
import {handler4616} from "./handler4616";
const app = express()
app.get('/4616', handler4616)
app.listen(3000, () => {})
        
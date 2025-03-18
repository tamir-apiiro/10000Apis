
const express = require('express')
import {handler4584} from "./handler4584";
const app = express()
app.get('/4584', handler4584)
app.listen(3000, () => {})
        
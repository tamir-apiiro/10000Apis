
const express = require('express')
import {handler4617} from "./handler4617";
const app = express()
app.get('/4617', handler4617)
app.listen(3000, () => {})
        
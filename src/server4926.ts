
const express = require('express')
import {handler4926} from "./handler4926";
const app = express()
app.get('/4926', handler4926)
app.listen(3000, () => {})
        
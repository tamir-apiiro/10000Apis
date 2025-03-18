
const express = require('express')
import {handler4781} from "./handler4781";
const app = express()
app.get('/4781', handler4781)
app.listen(3000, () => {})
        
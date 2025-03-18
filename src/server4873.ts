
const express = require('express')
import {handler4873} from "./handler4873";
const app = express()
app.get('/4873', handler4873)
app.listen(3000, () => {})
        
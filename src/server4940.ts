
const express = require('express')
import {handler4940} from "./handler4940";
const app = express()
app.get('/4940', handler4940)
app.listen(3000, () => {})
        
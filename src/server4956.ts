
const express = require('express')
import {handler4956} from "./handler4956";
const app = express()
app.get('/4956', handler4956)
app.listen(3000, () => {})
        
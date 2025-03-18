
const express = require('express')
import {handler4437} from "./handler4437";
const app = express()
app.get('/4437', handler4437)
app.listen(3000, () => {})
        
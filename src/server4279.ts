
const express = require('express')
import {handler4279} from "./handler4279";
const app = express()
app.get('/4279', handler4279)
app.listen(3000, () => {})
        

const express = require('express')
import {handler279} from "./handler279";
const app = express()
app.get('/279', handler279)
app.listen(3000, () => {})
        

const express = require('express')
import {handler234} from "./handler234";
const app = express()
app.get('/234', handler234)
app.listen(3000, () => {})
        
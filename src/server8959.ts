
const express = require('express')
import {handler8959} from "./handler8959";
const app = express()
app.get('/8959', handler8959)
app.listen(3000, () => {})
        
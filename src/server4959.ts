
const express = require('express')
import {handler4959} from "./handler4959";
const app = express()
app.get('/4959', handler4959)
app.listen(3000, () => {})
        